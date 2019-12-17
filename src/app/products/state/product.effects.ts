import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import * as productActions from './product.actions'
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { Product } from '../product';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class ProductEffects {

    constructor(private actions$: Actions,
        private productService: ProductService){}

    @Effect()
    loadProducts$ = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.Load),
        switchMap((action: productActions.Load) => 
            this.productService.getProducts().pipe(
                map((products: Product[]) => (new productActions.LoadSuccess(products))),
                catchError(err => of(new productActions.LoadFail(err)))
            ))
    )

    @Effect()
    updateProduct$: Observable<Action> = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.UpdateProduct),
        map((action: productActions.UpdateProduct) => action.payload),
        switchMap((product: Product) => 
            this.productService.updateProduct(product).pipe(
                map(udpatedProduct => (new productActions.UpdateProductSuccess(udpatedProduct))),
                catchError(err => of(new productActions.UpdateProductFail(err)))
            )
        )
    )

    @Effect()
    deleteProduct$ = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.DeleteProduct),
        map((action: productActions.DeleteProduct) => action.payload),
        switchMap(productId => 
            this.productService.deleteProduct(productId).pipe(
                map(() => (new productActions.DeleteProductSuccess(productId))),
                catchError(err => of(new productActions.DeleteProductFail(err)))
            )
        )
    )

    @Effect()
    createProduct$ = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.CreateProduct),
        map((action: productActions.CreateProduct) => action.payload),
        switchMap(product =>
            this.productService.createProduct(product).pipe(
                map((newProduct) => (new productActions.CreateProductSuccess(newProduct))),
                catchError(err => of(new productActions.CreateProductFail(err)))
            )
        )
    )

}