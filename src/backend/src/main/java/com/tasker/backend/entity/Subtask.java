package com.tasker.backend.entity;

public class Subtask {
    // ------------------------
    // PRIVATE FIELDS
    // ------------------------
    
    private int id;

    // Subtask name
    private String name;

    // Subtask status (false: incomplete, true: complete)
    private boolean status;

    // Subtask's corresponding UserTask
    private int taskId;


    // ------------------------
    // PUBLIC METHODS
    // ------------------------

    public Subtask() { }

    public Subtask(int id, String name, boolean status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }

    // Getter and setter methods

    public int getId() {
        return id;
    }

    public void setId(int value) {
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
}
