package com.ashu.reactspringboot;

import com.ashu.reactspringboot.util.ApplicationUtil;

import java.sql.Date;

public class DateTest {

    public static void main(String[] args) {
        String dateToday = ApplicationUtil.getCurrentDate("yyyy-MM-dd");

        Date.valueOf(dateToday);
    }


}
