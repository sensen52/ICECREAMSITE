package com.example.demo.domain.mapper;

import java.util.List;

import com.example.demo.domain.dto.MemberDto;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface MemberMapper{


	@Select("select * from tbl_member")
	public List<MemberDto> selectAll();

	@Select("select * from tbl_member where username = #{username}")
	public MemberDto select(@Param("username") String username);

	@Select("select * from tbl_member where phonenumber = #{phonenumber}")
	public MemberDto selectPhone(@Param("phoneNumber") String phoneNumber);

	@Select("select password from tbl_member where username = #{username}")
	public String selectPassword(@Param("username") String username);

	@Select("select * from tbl_member where password = #{password}")
	public MemberDto selectPass(@Param("cur_pass") String password);

	
	@Insert("insert into tbl_member values(#{username},#{password},#{name},#{birthday},#{phoneNumber},#{email},#{addr},#{role})")
	public int insert(MemberDto dto);

	@Update("update tbl_member set birthday=#{birthday}, name=#{name}, phoneNumber=#{phoneNumber}, password=#{password}, email =#{email},addr=#{addr} where username = #{username}")

	public int update(MemberDto dto);




	@Delete("delete from tbl_member where username = #{username}")
	public int delete(String username);

}
