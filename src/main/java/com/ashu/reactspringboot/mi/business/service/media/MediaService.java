package com.ashu.reactspringboot.mi.business.service.media;


import org.jcodec.api.awt.AWTSequenceEncoder;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Service
public class MediaService implements IMediaService {

    public BufferedImage getImage() throws AWTException {

        System.out.println("getImage Start");

        Robot robot = initiateRobot();

        System.out.println("Robot Initialized");

        Rectangle screenRect = defaultScreen();

        System.out.println("Rectangle Screen Initialized");

        BufferedImage image = captureImage(robot,screenRect);

        System.out.println("BufferedImage Captured");

        System.out.println("getImage End");

        return image;
    }




    @Override
    public void saveImage() throws AWTException {

        BufferedImage image = getImage();

    }

    @Override
    public void saveVideo(String videoName) throws AWTException, IOException {
        System.out.println("saveVideo Start");
        List<BufferedImage> imageList = new ArrayList<>();

        Robot robot = initiateRobot();

        Rectangle screenRect = defaultScreen();

        int count = 0;
        System.out.println("BufferedImage Start");
        while (count < 100) {

            BufferedImage image = captureImage(robot,screenRect);

            imageList.add(image);

            count++;

        }
        System.out.println("BufferedImage End");

        makeVideoFromImages(imageList,new File(MEDIA_PATH+"/"+videoName+".mp4"));

        System.out.println("saveVideo End");

    }

    public static void makeVideoFromImages(List<BufferedImage> imageList, File file) throws IOException {
        System.out.println("makeVideoFromImages Start");
        Instant start = Instant.now();
        AWTSequenceEncoder sequenceEncoder = AWTSequenceEncoder.createSequenceEncoder(file, 10);

        for (int i = 0; i < imageList.size(); i++) {

            System.out.println("Frame encode " + i);
            sequenceEncoder.encodeImage(imageList.get(i));

        }

        sequenceEncoder.finish();

        Instant end = Instant.now();

        Duration interval = Duration.between(start,end);

        System.out.println("interval in seconds " + interval.getSeconds());

        System.out.println("makeVideoFromImages End");

    }
}
