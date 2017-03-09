package dbManager;
import java.sql.Connection;
import java.sql.DriverManager;
public class DBConnect {
	Connection conn = null;
	
	public DBConnect() {}
	
	public Connection getConnection() {
		//�뱶�씪�씠踰� �꽕�젙 -mory
		String jdbc_driver = "com.mysql.jdbc.Driver";
		//�뵒鍮� �뿰寃� �꽕�젙 - mory
		String url = "jdbc:mysql://m2mdb.c5jbncrcalzs.us-east-1.rds.amazonaws.com:3306/m2mdb";
		String id = "m2mDB";
		String pass = "rnjsgurwns";
		//�뵒鍮� �젙蹂� �엯�젰 ...............!
		
		try {
			Class.forName(jdbc_driver);
			conn = DriverManager.getConnection(url,id,pass);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}
}

