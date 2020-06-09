package com.ashu.reactspringboot.mi.service;

import com.ashu.reactspringboot.mi.model.Issue;
import com.ashu.reactspringboot.mi.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PostGressIssueService implements IIssueOperations {

  /*  @Autowired
    IssueRepository iIssueRepository;


    @Override
    public List<Issue> getIssues() {
        return iIssueRepository.findAll();

    }

    @Override
    public Issue getIssueId(Long id) {
        return iIssueRepository.findByIssueId(id);
    }

    @Override
    public void insertIssues(Issue issue) {
    iIssueRepository.save(issue);
    }

    @Override
    public List<Issue> searchIssueByUserId(String userId) {
        return  iIssueRepository.findIssuesByUserId(userId);
    }*/


}
