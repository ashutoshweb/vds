package com.ashu.reactspringboot;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class HelloController {

    private static List<String> names = new ArrayList();
    static {
names.add("Ashutosh");
names.add("Ma");
names.add("Ashapur");

    }
    @GetMapping(path = "/hello")
    public String sayHello( ){


        Random r = new Random();
        String e = names.get(r.nextInt(names.size()));
        return e;
    }

    @GetMapping(path = "/kule")
    public String sayHelloToKule( ){

            return "Hello, scjhgd Kule Ka Pule";
    }

    @GetMapping(path = "/chaina")
    public String sayHelloToChaina( ){

        return "Hello, Shaina Badmash";
    }
}
