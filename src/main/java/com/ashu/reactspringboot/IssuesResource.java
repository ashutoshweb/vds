package com.ashu.reactspringboot;

import com.ashu.reactspringboot.mi.business.service.worker.UserWorker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/mi/api/v1")
@CrossOrigin
public class IssuesResource {

    @Autowired
    private UserWorker userWorker;

    @GetMapping(path="/media/{mediaType}/{application}")
    public String reportIssue(@PathVariable("mediaType") String mediaType, @PathVariable("application") String application, HttpServletRequest request){

        HttpSession session = request.getSession();

        String userId = (String)session.getAttribute("userId");

        System.out.println("IssuesResource userId ="+userId);

        if(userId==null){
            userId = "devusmi";
        }

        userWorker.reportIssue(userId,mediaType,application);

        return "success";

    }




}
