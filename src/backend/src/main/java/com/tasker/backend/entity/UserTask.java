package com.tasker.backend.entity;

import java.sql.Date;
import com.tasker.backend.utils.JSONUtils;

public class UserTask {
    // ------------------------
    // PRIVATE FIELDS
    // ------------------------
    private String id;

    // UserTask name
    private String name;

    // UserTask status (false: incomplete, true: complete)
    private boolean status;

    // UserTask deadline
    private Date deadline;

    // UserTask priority
    private int priority;

    // UserTask description
    private String description;


    // ------------------------
    // PUBLIC METHODS
    // ------------------------

    public UserTask() { }

    public UserTask(String id, String name, boolean status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }

    public UserTask(String id, String name, boolean status, Date deadline, int priority, String description) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.deadline = deadline;
        this.priority = priority;
        this.description = description;
    }

    // Getter and setter methods

    public String getId() {
        return id;
    }

    public void setId(String value) {
        this.id = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String value) {
        this.name = value;
    }

    public boolean getStatus() {
        return status;
    }

    public void setStatus(boolean value) {
        this.status = value;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date value) {
        this.deadline = value;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int value) {
        this.priority = value;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String value) {
        this.description = value;
    }

    public void addTask(UserTask value) { }

    public void updateTask(UserTask value) { }

    public void deleteTask(String id) { }

    @Override
    public String toString() {
        return JSONUtils.toJson(this);
    }
}
