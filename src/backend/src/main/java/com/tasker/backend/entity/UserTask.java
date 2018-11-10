package com.tasker.backend.entity;

import java.sql.Date;
import com.tasker.backend.utils.JSONUtils;

public class UserTask {
    // ------------------------
    // PRIVATE FIELDS
    // ------------------------
    private String id;

    // UserTask taskName
    private String taskName;

    // UserTask status (false: incomplete, true: complete)
    private boolean status;

    // UserTask deadline
    private Date deadline;

    // UserTask priority
    private int priority;

    // UserTask description
    private String description;

    // UserTask associated ListID
    private String listId;


    // ------------------------
    // PUBLIC METHODS
    // ------------------------

    public UserTask() { }

    public UserTask(String id, String name, boolean status, String listId) {
        this.id = id;
        this.taskName = name;
        this.status = status;
        this.listId = listId;
    }

    public UserTask(String id, String taskName, boolean status, Date deadline, int priority, String description, String listId) {
        this.id = id;
        this.taskName = taskName;
        this.status = status;
        this.deadline = deadline;
        this.priority = priority;
        this.description = description;
        this.listId = listId;
    }

    // Getter and setter methods

    public String getId() {
        return id;
    }

    public void setId(String value) {
        this.id = value;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String value) {
        this.taskName = value;
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

    public String getListId() {
        return listId;
    }

    public void setListId(String value){
        this.listId = value;
    }

    @Override
    public String toString() {
        return JSONUtils.toJson(this);
    }
}
