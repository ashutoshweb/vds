package com.ashu.reactspringboot.mi.model;

import lombok.Data;

//import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;



/*@Entity
@Table(name="mi_issues_repo")*/
@Data
public class Issue implements Serializable {



   /* @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="issue_id")*/
    private Long issueId;

    private String tracker_id;

   // @Column(name="user_id")
    private String userId;

    private String media_type;

    private String application_name;

    private Date insert_time;


    public Issue(){}


    public Issue(String trackerId , String userId, String mediaType, String application, String dateToday) {
        System.out.println("dateToday---" +dateToday);
        this.tracker_id=trackerId;
        this.userId=userId;
        this.media_type=mediaType;
        this.application_name=application;
        this.insert_time = Date.valueOf(dateToday);
    }
}

