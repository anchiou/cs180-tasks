package com.tasker.backend;

import com.tasker.backend.utils.JSONUtils;

public class RestResponse {
    private int status; // HTTP response code
    private String message;
    //private String data;

    public RestResponse(int status, String message) {
        this.status = status;
        this.message = message;
        //this.data = data.toString();
    }

    @Override
    public String toString() {
        return JSONUtils.toJson(this);
    }

    // TODO: getters and setters
}
