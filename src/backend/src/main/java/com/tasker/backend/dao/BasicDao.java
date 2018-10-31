package com.tasker.backend.dao;

public interface BasicDao<T> {
    /**
     * 插入数据
     * @param entity 要插入的数据
     * @return 插入数据条数
     */
    public int insert(T entity);

    /**
     * 删除数据
     * @param id 数据的ID.
     * @return 删除的数据条数
     */
    public int delete(String id);


    /**
     * 更新数据
     * @param Entity 要更新的数据
     * @return 更新成功的数据条数
     */
    public int update(T Entity);

    /**
     * 获取数据
     * @param id 数据ID
     * @return 数据对象
     */
    public T get(String id);

}
