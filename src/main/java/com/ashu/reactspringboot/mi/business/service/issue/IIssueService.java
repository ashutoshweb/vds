package com.ashu.reactspringboot.mi.business.service.issue;

import com.ashu.reactspringboot.mi.model.Issue;

import java.util.List;

public interface IIssueService {

    Issue insertIssue(String trackerId, String userId, String mediaType, String application);

    List<Issue> retrieveIssues();

    List<Issue> searchIssueByUserId(String userId);


}
