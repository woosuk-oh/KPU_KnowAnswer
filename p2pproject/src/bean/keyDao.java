package bean;

	import java.sql.Connection;
	import java.sql.PreparedStatement;
	import java.sql.ResultSet;
	import dbManager.*;
public class keyDao {

		DBConnect dbconnect = null;
		String sql = "";

		public keyDao() {
			dbconnect = new DBConnect();
		}
		
		/* 키값 데이터베이스에 입력하는 메서드 */ 
		public void insertAdmin(String key) throws Exception {
			Connection conn = dbconnect.getConnection();
			PreparedStatement pstmt = null;
			try {
				pstmt = conn.prepareStatement("insert into keytable values (?)");
				pstmt.setString(1, key);

				pstmt.executeUpdate();
			} catch (Exception ex) {
				ex.printStackTrace();
			} finally {
				System.out.println("키값 입력 완료[" + key + "]");
				DBDisConnect.close(conn,pstmt);
			}
		}
		
		/* 키 값 업데이트  -> 주로 이걸 많이 씀 */ 
		public void UpdateStep(String key) {
			Connection con = dbconnect.getConnection();
			PreparedStatement pstmt = null;
			try {
				sql = "UPDATE keytable SET keydata=? WHERE id=1";
				pstmt = con.prepareStatement(sql);
				pstmt.setString(1, key);
				pstmt.executeUpdate();
				
			}catch(Exception e) {
				System.out.println(e);
			}finally {
				System.out.println("키 값 수정 완료["+ key +"]");
				DBDisConnect.close(con,pstmt);
			}
		}
		
		public String getKey() throws Exception {
			Connection conn = dbconnect.getConnection();
			PreparedStatement pstmt = null;
			ResultSet rs = null;
			String x = null;
			try {

				pstmt = conn.prepareStatement("select * from keytable where id=1");
				rs = pstmt.executeQuery();
				if (rs.next()) {
					x = rs.getString(1);
					System.out.println("키 값 값확인["+x +"] ");
				}
			} catch (Exception ex) {
				ex.printStackTrace();
			} finally {
				DBDisConnect.close(conn,pstmt,rs);
			}
			return x;
		}


		

	
}
