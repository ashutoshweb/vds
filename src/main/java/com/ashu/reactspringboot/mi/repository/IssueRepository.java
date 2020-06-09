package com.ashu.reactspringboot.mi.repository;

import com.ashu.reactspringboot.mi.model.Issue;
//import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IssueRepository /*extends JpaRepository<Issue,Long> */{

    List<Issue> findAll();

    Issue findByIssueId(Long id);

    Issue save(Issue issue);

    List<Issue> findIssuesByUserId(String userId);




}
