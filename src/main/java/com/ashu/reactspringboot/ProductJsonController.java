package com.ashu.reactspringboot;

import com.ashu.reactspringboot.mithila.product.model.Product;
import com.ashu.reactspringboot.mithila.product.service.IProductOperations;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v2")
@CrossOrigin

public class ProductJsonController {

    private static final Logger logger = LoggerFactory.getLogger(ProductJsonController.class);

    @Autowired
    private IProductOperations jsonProductService;

    @GetMapping(path = "/products")
    public List<Product> fetchAllProducts( ){


         return jsonProductService.getProducts();



    }

    @GetMapping(path = "/products/{id}")
    @ResponseBody
    public Product fetchProduct(@PathVariable final String id){

        logger.info("id={}",id);


        return jsonProductService.getProductById(id);



    }
}
