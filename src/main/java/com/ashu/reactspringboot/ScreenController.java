package com.ashu.reactspringboot;


/*import com.teamdev.jxcapture.CompressionQuality;
import com.teamdev.jxcapture.ImageCapture;
import com.teamdev.jxcapture.image.ImageFormat;
import com.teamdev.jxcapture.video.FullScreen;*/
import com.ashu.reactspringboot.mi.business.service.issue.IIssueService;
import com.ashu.reactspringboot.mi.business.service.worker.UserWorker;
import com.ashu.reactspringboot.mi.service.IIssueOperations;
import org.jcodec.api.awt.AWTSequenceEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.awt.image.DataBufferByte;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api/v1/screen")
@CrossOrigin
public class ScreenController {

    @Autowired
    private IIssueOperations postGressIssueService;

    @Autowired
    private IIssueService issueService;

    @Autowired
    private UserWorker userWorker;





    @GetMapping(path = "/image")
    public String saveImage( ) throws Exception{


        List<BufferedImage> imageList = new ArrayList<>();

        Rectangle screenRect = new Rectangle(Toolkit.getDefaultToolkit().getScreenSize());
        Robot robot = new Robot();

        File file = new File("/Users/ashutoshdas/github/projects/ashutoshdasjava/target/classes/static/static/outputVideo3.mp4");

        System.out.println("getting screen images...");

        int count = 0;
        while (count < 100) {

            BufferedImage image = robot.createScreenCapture(screenRect);


            imageList.add(image);

            count++;

        }

        //saveImageToRepository(imageList);

        ;

       // postGressIssueService.insertIssues(new Issue("Ashu","VI"));

        makeVideoFromImages(imageList,file);




       /* ImageCapture imageCapture = ImageCapture.create(new FullScreen());
        long before = System.currentTimeMillis();
        imageCapture.takeSnapshot().save(new File("FullScreen.jpg"), ImageFormat.JPEG, CompressionQuality.HIGH);
        long after = System.currentTimeMillis();
        imageCapture.release();
        System.out.println("Operation took " + (after - before) + " milliseconds.");*/


        return "Success";


    }

    private void saveImageToRepository(List<BufferedImage> imageList) throws IOException {

        byte[] imageBytesFinal = null;


        ByteArrayOutputStream outputStream = new ByteArrayOutputStream( );

        for (int i = 0; i < imageList.size(); i++) {

            BufferedImage bufferedImage = imageList.get(i);

            byte[] imageBytes =  ((DataBufferByte) bufferedImage.getData().getDataBuffer()).getData();

            outputStream.write( imageBytes);
        }

        imageBytesFinal = outputStream.toByteArray();
    }


    public static void makeVideoFromImages(List<BufferedImage> imageList, File file) throws IOException {

        AWTSequenceEncoder sequenceEncoder = AWTSequenceEncoder.createSequenceEncoder(file, 10);

        for (int i = 0; i < imageList.size(); i++) {

            System.out.println("list encode " + i);
            sequenceEncoder.encodeImage(imageList.get(i));

        }

        sequenceEncoder.finish();

    }
}
