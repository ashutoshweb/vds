package com.ashu.reactspringboot.mi.business.service.worker;

import com.ashu.reactspringboot.mi.business.service.issue.IIssueService;
import com.ashu.reactspringboot.mi.business.service.media.IMediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.io.IOException;
import java.time.LocalDateTime;

@Service
public class UserWorker {

    @Autowired
    IMediaService mediaService;

    @Autowired
    IIssueService issueService;

    private static String MEDIA_VIDEO = "VI";

    public void reportIssue(String userId, String mediaType, String application){

        if(MEDIA_VIDEO.equalsIgnoreCase(mediaType)){
            String trackerId = userId+"~"+application+"~"+ LocalDateTime.now();
            try {
                mediaService.saveVideo(trackerId);
            } catch (AWTException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }

            issueService.insertIssue(trackerId,userId,mediaType,application);
        }


    }
}
