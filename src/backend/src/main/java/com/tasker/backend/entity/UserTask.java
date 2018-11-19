package com.tasker.backend.entity;

import java.sql.Date;
import com.tasker.backend.utils.JSONUtils;

public class UserTask {
    // ------------------------
    // PRIVATE FIELDS
    // ------------------------
    private int id;

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
    private int listId;


    // ------------------------
    // PUBLIC METHODS
    // ------------------------

    public UserTask() { }

    public UserTask(int id, String name, boolean status, int listId) {
        this.id = id;
        this.taskName = name;
        this.status = status;
        this.listId = listId;
    }

    public UserTask(int id, String taskName, boolean status, Date deadline, int priority, String description, int listId) {
        this.id = id;
        this.taskName = taskName;
        this.status = status;
        this.deadline = deadline;
        this.priority = priority;
        this.description = description;
        this.listId = listId;
    }

    // Getter and setter methods

    public int getId() {
        return id;
    }

    public void setId(int value) {
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

    public int getListId() {
        return listId;
    }

    public void setListId(int value){
        this.listId = value;
    }

    @Override
    public String toString() {
        return JSONUtils.toJson(this);
    }
}
