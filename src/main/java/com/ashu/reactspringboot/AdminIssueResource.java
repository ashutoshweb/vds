package com.ashu.reactspringboot;

import com.ashu.reactspringboot.mi.business.service.worker.AdminWorker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/mi/api/v1")
@CrossOrigin
public class AdminIssueResource {

    @Autowired
    AdminWorker adminWorker;



    @GetMapping(path="/issues")
    public List getIssues(){

        return  adminWorker.fetchIssues();



    }

    @GetMapping(path="/tracker/{searchType}/{param}")
    public List search(@PathVariable("searchType") String searchType, @PathVariable("param") String param){

        List issues = adminWorker.searchIssues(searchType,param);

        return issues;

    }
}
