package com.tasker.backend.entity;

import com.tasker.backend.utils.JSONUtils;

public class UserList {
    // ------------------------
    // PRIVATE FIELDS
    // ------------------------
    private int id;

    // UserList listName
    private String listName;

    // UserList associated ListID
    private int userId;

    // ------------------------
    // PUBLIC METHODS
    // ------------------------

    public UserList() { }

    public UserList(int id, String name, int userId) {
        this.id = id;
        this.listName = name;
        this.userId = userId;
    }

    // Getter and setter methods

    public int getId() {
        return id;
    }

    public void setId(int value) {
        this.id = value;
    }

    public String getListName() {
        return listName;
    }

    public void setListName(String value) {
        this.listName = value;
    }
    
    public int getUserId() {
        return userId;
    }

    public void setUserId(int value){
        this.userId = value;
    }

    @Override
    public String toString() {
        return JSONUtils.toJson(this);
    }
}
