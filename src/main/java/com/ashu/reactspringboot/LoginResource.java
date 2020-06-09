package com.ashu.reactspringboot;

import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@RestController
@RequestMapping("/mi/application")
@CrossOrigin
public class LoginResource {

    @PostMapping(path="/page")
    public void displayApplicationPage(HttpServletRequest request, HttpServletResponse response, ModelMap model,@RequestBody String postPayload){



        String userIdParam = (String)request.getParameter("USERID");

        System.out.println("userId ="+userIdParam);

        HttpSession session = request.getSession(true);

        session.setAttribute("userId",userIdParam);





        try {
            if("trainer321".equalsIgnoreCase(userIdParam)){
                response.sendRedirect("/mipop.html");

            }else{
                response.sendRedirect("/miinauth.html");
            }

        } catch (IOException e) {
            e.printStackTrace();
        }

        // return new ModelAndView("forward:/http://localhost:5000", model);



    }
}
