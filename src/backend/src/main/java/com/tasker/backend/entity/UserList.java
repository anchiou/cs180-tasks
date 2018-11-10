package com.tasker.backend.entity;

import com.tasker.backend.utils.JSONUtils;

public class UserList {
    // ------------------------
    // PRIVATE FIELDS
    // ------------------------
    private String id;

    // UserList listName
    private String listName;

    // UserList associated ListID
    private String userId;

    // ------------------------
    // PUBLIC METHODS
    // ------------------------

    public UserList() { }

    public UserList(String id, String name, String userId) {
        this.id = id;
        this.listName = name;
        this.userId = userId;
    }

    // Getter and setter methods

    public String getId() {
        return id;
    }

    public void setId(String value) {
        this.id = value;
    }

    public String getListName() {
        return listName;
    }

    public void setListName(String value) {
        this.listName = value;
    }
    
    public String getUserId() {
        return userId;
    }

    public void setUserId(String value){
        this.userId = value;
    }

    @Override
    public String toString() {
        return JSONUtils.toJson(this);
    }
}
