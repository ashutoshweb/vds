package com.ashu.reactspringboot.mi.business.service.issue;

import com.ashu.reactspringboot.mi.model.Issue;
import com.ashu.reactspringboot.mi.service.IIssueOperations;
import com.ashu.reactspringboot.util.ApplicationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class IssueService implements IIssueService{

    @Autowired
    private IIssueOperations postGressIssueService;


    @Override
    public Issue insertIssue(String trackerId, String userId, String mediaType, String application) {

        String dateToday = ApplicationUtil.getCurrentDate("yyyy-MM-dd");

        Issue issue = new Issue(trackerId,userId,mediaType,application,dateToday);


      //  postGressIssueService.insertIssues(issue);

        return null;
    }

    @Override
    public List<Issue> retrieveIssues() {

       // List<Issue> issues= postGressIssueService.getIssues();

       // return issues;
        return null;
    }

    @Override
    public List<Issue> searchIssueByUserId(String userId) {

       /* List<Issue> issues= postGressIssueService.searchIssueByUserId(userId);

        return issues;*/

       return null;
    }
}
