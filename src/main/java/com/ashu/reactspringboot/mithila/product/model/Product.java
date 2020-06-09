package com.ashu.reactspringboot.mithila.product.model;



import java.io.Serializable;

/*import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.sql.Timestamp;

@Entity
@Table(name="mithilawear_product")
@Data*/

public class Product implements Serializable {


    private String product_id;


    private String product_name;


    private String image_name;



    private String image_url;


    private String image_url_detail;


    private String image_dimension;


    private String product_type;


    private String product_category;
    private double product_price;
    private String product_description;
    private String product_created_by;
    private String product_status;

  //  private Timestamp product_load_time;


    public String getProduct_id() {
        return product_id;
    }

    public void setProduct_id(String product_id) {
        this.product_id = product_id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public String getImage_name() {
        return image_name;
    }

    public void setImage_name(String image_name) {
        this.image_name = image_name;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public String getImage_url_detail() {
        return image_url_detail;
    }

    public void setImage_url_detail(String image_url_detail) {
        this.image_url_detail = image_url_detail;
    }

    public String getImage_dimension() {
        return image_dimension;
    }

    public void setImage_dimension(String image_dimension) {
        this.image_dimension = image_dimension;
    }

    public String getProduct_type() {
        return product_type;
    }

    public void setProduct_type(String product_type) {
        this.product_type = product_type;
    }

    public String getProduct_category() {
        return product_category;
    }

    public void setProduct_category(String product_category) {
        this.product_category = product_category;
    }

    public double getProduct_price() {
        return product_price;
    }

    public void setProduct_price(double product_price) {
        this.product_price = product_price;
    }

    public String getProduct_description() {
        return product_description;
    }

    public void setProduct_description(String product_description) {
        this.product_description = product_description;
    }

    public String getProduct_created_by() {
        return product_created_by;
    }

    public void setProduct_created_by(String product_created_by) {
        this.product_created_by = product_created_by;
    }

    public String getProduct_status() {
        return product_status;
    }

    public void setProduct_status(String product_status) {
        this.product_status = product_status;
    }

}
