package com.tasker.backend.entity;

import com.tasker.backend.utils.JSONUtils;

public class User {
    // ------------------------
    // PRIVATE FIELDS
    // ------------------------
    private int id;

    // User email
    private String email;

    // User username
    private String username;
    
    // User password
    private String password;

    // ------------------------
    // PUBLIC METHODS
    // ------------------------

    public User() { }

    public User(int id, String email, String username, String password) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    // Getter and setter methods

    public int getId() {
        return id;
    }

    public void setId(int value) {
        this.id = value;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String value) {
        this.email = value;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String value){
        this.username = value;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String value){
        this.password = value;
    }

    @Override
    public String toString() {
        return JSONUtils.toJson(this);
    }
}
