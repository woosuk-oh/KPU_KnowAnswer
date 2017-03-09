package bean;

	import java.sql.Connection;
	import java.sql.PreparedStatement;
	import java.sql.ResultSet;
	import dbManager.*;
public class stepDao {

		DBConnect dbconnect = null;
		String sql = "";

		public stepDao() {
			dbconnect = new DBConnect();
		}

		/* 단계값 받아오는 메소드 */
		public int getStep() throws Exception {
			Connection conn = dbconnect.getConnection();
			PreparedStatement pstmt = null;
			ResultSet rs = null;
			int x = 0;
			try {

				pstmt = conn.prepareStatement("select step from steptable");
				rs = pstmt.executeQuery();
				if (rs.next()) {
					x = rs.getInt(1);
					System.out.println("시나리오1 [" + x + "]단계 진행 중");
				}
			} catch (Exception ex) {
				ex.printStackTrace();
			} finally {
				DBDisConnect.close(conn,pstmt,rs);
			}
			return x;
		}
		/* 단계값 수정하는 메소드 */ 
		public void UpdateStep(String step) {
			Connection con = dbconnect.getConnection();
			PreparedStatement pstmt = null;
			try {
				sql = "UPDATE steptable SET step=?";
				pstmt = con.prepareStatement(sql);
				pstmt.setString(1, step);
				pstmt.executeUpdate();
				
			}catch(Exception e) {
				System.out.println(e);
			}finally {
				System.out.println("시나리오1 ["+step+"]단계로 수정 완료");
				DBDisConnect.close(con,pstmt);
			}
		}
	
}
