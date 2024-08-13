import mariadb from "mariadb";
import dotenv from "dotenv";
dotenv.config();

// db connection
const pool = mariadb.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    connectionLimit: 5
  });

// arrow function
  const getAllUsers = async () => {
    let conn; // 연결설정 변수(연결POOL)
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM users");
        return rows;
    } catch(err) {
        console.log(err);
    } finally {
        if(conn) conn.end();
    }
} 

const getOneUser = async (userId) => {
    let conn; // 연결설정 변수(연결POOL)
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM users WHERE id=?", [userId]);
        return rows;
    } catch(err) {
        console.log(err);
    } finally {
        if(conn) conn.end();
    }
} 

const addOneUser = async (userId, userName, userEmail) => {
    let conn; // 연결설정 변수(연결POOL)
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("INSERT INTO users (id, name, email) VALUES (?,?,?)", [userId, userName, userEmail]);
        return rows;
    } catch(err) {
        console.log(err);
    } finally {
        if(conn) conn.end();
    }
}
// 객체(Object): 변수(문자열, 숫자, 논리), 함수, 클래스, 심볼...거의 모든
// 자바스크립트 자료형을 담을 수 있다.
const userModel = {
    getAllUsers,
    getOneUser,
    addOneUser
}

export default userModel;