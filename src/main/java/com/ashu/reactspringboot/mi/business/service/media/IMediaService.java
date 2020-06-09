package com.ashu.reactspringboot.mi.business.service.media;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.IOException;

public interface IMediaService {

    String MEDIA_PATH = "/Users/ashutoshdas/github/projects/ashutoshdasjava/target/classes/static/static/";

    default Robot initiateRobot() throws AWTException {
        Rectangle screenRect = new Rectangle(Toolkit.getDefaultToolkit().getScreenSize());
        Robot robot = new Robot();

        return robot;

    }

    default Rectangle defaultScreen() throws AWTException {
        Rectangle screenRect = new Rectangle(Toolkit.getDefaultToolkit().getScreenSize());

        return screenRect;

    }

    default BufferedImage captureImage(Robot robot, Rectangle screenRect) throws AWTException {

        BufferedImage image = robot.createScreenCapture(screenRect);

        return image;

    }

    void saveImage() throws AWTException;

    void saveVideo(String videoName) throws AWTException, IOException;
}
