package com.ashu.reactspringboot.mi.business.service.worker;

import com.ashu.reactspringboot.mi.business.service.issue.IIssueService;
import com.ashu.reactspringboot.mi.model.Issue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminWorker {

    @Autowired
    IIssueService issueService;

    public List<Issue> fetchIssues(){

    List issues = null;
        try {
            issues =   issueService.retrieveIssues();
        }catch (Exception ex){
            ex.printStackTrace();
        }


        return issues;


    }

    public List<Issue> searchIssues(String serachType, String param){

        List<Issue> issues = null;
        try {
            issues =   issueService.searchIssueByUserId(param);



        }catch (Exception ex){
            ex.printStackTrace();
        }


        return issues;


    }


}
