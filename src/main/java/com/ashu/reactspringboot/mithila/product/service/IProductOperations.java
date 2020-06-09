package com.ashu.reactspringboot.mithila.product.service;

import com.ashu.reactspringboot.mithila.product.model.Product;

import java.util.List;

public interface IProductOperations {

    public List getProducts();

    public Product getProductById(String id );

    public Product getProductById(Long id );


}
