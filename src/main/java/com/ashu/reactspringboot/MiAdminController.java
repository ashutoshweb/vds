package com.ashu.reactspringboot;

import com.ashu.reactspringboot.mi.service.IIssueOperations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileInputStream;
import java.util.*;

@RestController
@RequestMapping("/api/v1/admin")
@CrossOrigin
public class MiAdminController {

    private static List<Map> products = new ArrayList();

    @Autowired
    private IIssueOperations postGressIssueService;

    static {
        Map product1 = new HashMap();

        product1.put("issueId", "1");
        product1.put("userId", "prod1");
        product1.put("resourcetype", "title1");
        product1.put("image", "https://source.unsplash.com/random/300x200");

        Map product2 = new HashMap();
        product2.put("issueId", "1");
        product2.put("userId", "prod1");
        product2.put("resourcetype", "title1");
        product2.put("image", "https://source.unsplash.com/random/301x200");

        products.add(product1);
        products.add(product2);
    }


    @GetMapping(path = "/issues")
    public List fetchAllIssues( ){



       // return postGressIssueService.getIssues();

        return null;

    }
    @RequestMapping(value = "/issue", method = RequestMethod.GET, produces = "video/mp4")
    public  byte[] fetchAllVideos( ){

        File file = new File("/Users/ashutoshdas/github/projects/ashutoshdasjava/target/classes/static/static/outputVideo3.mp4");
        //init array with file length
        byte[] bytesArray = new byte[(int) file.length()];

        try (FileInputStream fis = new FileInputStream(file)) {
            fis.read(bytesArray); //read file into bytes[]
            fis.close();
        }catch(Exception ex){
            ex.printStackTrace();
        }




        //String byteString = Arrays.toString(bytesArray);

        //System.out.println("byteArray = "+byteString);

        byte[] base64Bytes = Base64.getEncoder().encode(bytesArray);

        System.out.println("base64Bytes = "+base64Bytes);

        return base64Bytes;



    }
}
