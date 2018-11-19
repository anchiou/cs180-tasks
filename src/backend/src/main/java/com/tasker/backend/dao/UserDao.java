package com.tasker.backend.dao;

import com.tasker.backend.entity.User;

public interface UserDao extends BasicDao<User>{
    User findbyEmail(String email);
    User findbyUsername(String username);
}
