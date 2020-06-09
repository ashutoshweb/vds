package com.ashu.reactspringboot.util;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


public class ApplicationUtil {

    public static String getCurrentDate(String format){

        LocalDate now = LocalDate.now();

        System.out.println("Before : " + now);

        DateTimeFormatter dateformatter = DateTimeFormatter.ofPattern(format);

        String formatDate = now.format(dateformatter);

        System.out.println("After : " + formatDate);

        return formatDate;

    }
}
