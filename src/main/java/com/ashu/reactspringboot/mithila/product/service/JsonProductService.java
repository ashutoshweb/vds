package com.ashu.reactspringboot.mithila.product.service;

import com.ashu.reactspringboot.mithila.product.model.Product;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class JsonProductService implements IProductOperations {

    private static final Logger logger = LoggerFactory.getLogger(JsonProductService.class);

    private static List<Product> products;

    static {

        products = new ArrayList<>();

        ObjectMapper mapper = new ObjectMapper();

        try {
            //File jsonFile = new ClassPathResource("product.json").getFile();

            //products = mapper.readValue(jsonFile, new TypeReference<List<Product>>() {});


            if (products.isEmpty()) {

                try (InputStream inputStream = JsonProductService.class.getResourceAsStream("/product.json");
                     BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream))) {
                    String contents = reader.lines()
                            .collect(Collectors.joining(System.lineSeparator()));

                    products = mapper.readValue(contents, new TypeReference<List<Product>>() {});
                }


            }

        } catch (IOException e) {
            e.printStackTrace();



        }


    }


    @Override
    public List getProducts() {
        return products;
    }

    @Override
    public Product getProductById(String id) {

        logger.info("Enter id={}",id);

        List<Product> productInList= products.stream().filter(product -> id.equalsIgnoreCase((String)product.getProduct_id())).collect(Collectors.toList());

        logger.info("id ={},ProductList ={}",id,productInList);

        Product selectedProduct= productInList.get(0);

        logger.info("id ={},Product ={}",id,selectedProduct);

        return selectedProduct;
    }

    @Override
    public Product getProductById(Long id) {



        return null;
    }
}
