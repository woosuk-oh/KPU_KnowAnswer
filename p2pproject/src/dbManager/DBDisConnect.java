package dbManager;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class DBDisConnect {
	public static void close(Connection conn, PreparedStatement pstmt, ResultSet rs) {
		try {
			try {
				if (rs != null) {
					rs.close();
					rs = null;
				}
			} catch (Exception e) {
			}

			try {
				if (pstmt != null) {
					pstmt.close();
					pstmt = null;
				}
			} catch (Exception e) {
			}

			try {
				if (conn != null) {
					conn.close();
					conn = null;
				}
			} catch (Exception e) {
			}
		} catch (Exception e) {
		}
	}

	public static void close(Connection conn, PreparedStatement pstmt) {
		try {
			try {
				if (pstmt != null) {
					pstmt.close();
					pstmt = null;
				}
			} catch (Exception e) {
			}

			try {
				if (conn != null) {
					conn.close();
					conn = null;
				}
			} catch (Exception e) {
			}
		} catch (Exception e) {
		}
	}

	public static void close(Connection conn, Statement stmt) {
		try {
			try {
				if (stmt != null) {
					stmt.close();
					stmt = null;
				}
			} catch (Exception e) {
			}

			try {
				if (conn != null) {
					conn.close();
					conn = null;
				}
			} catch (Exception e) {
			}
		} catch (Exception e) {
		}
	}

	public static void close(Connection conn) {
		try {
			try {
				if (conn != null) {
					conn.close();
					conn = null;
				}
			} catch (Exception e) {
			}
		} catch (Exception e) {
		}
	}

	public static void close(PreparedStatement pstmt) {
		try {
			try {
				if (pstmt != null) {
					pstmt.close();
					pstmt = null;
				}
			} catch (Exception e) {
			}

		} catch (Exception e) {
		}
	}

	public static void close(Statement stmt) {
		try {
			try {
				if (stmt != null) {
					stmt.close();
					stmt = null;
				}
			} catch (Exception e) {
			}

		} catch (Exception e) {
		}
	}

	public static void close(ResultSet rs) {
		try {
			try {
				if (rs != null) {
					rs.close();
					rs = null;
				}
			} catch (Exception e) {
			}

		} catch (Exception e) {
		}
	}

	public static void close(PreparedStatement pstmt, ResultSet rs) {
		try {
			try {
				if (rs != null) {
					rs.close();
					rs = null;
				}
			} catch (Exception e) {
			}

			try {
				if (pstmt != null) {
					pstmt.close();
					pstmt = null;
				}
			} catch (Exception e) {
			}

		} catch (Exception e) {
		}
	}
}
