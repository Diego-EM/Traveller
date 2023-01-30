import express, { Router, Request, Response } from "express";
import { QueryError, RowDataPacket } from "mysql2";
import connection from "./db";

interface BusTicket extends RowDataPacket {
    leaving: string,
    depart: string,
    date: string,
    available: number,
    estimatedTime: string
}

interface Place extends RowDataPacket {
    leaving?: string,
    depart?: string
}

 const router: Router = express.Router();

 router.post('/tickets',(req: Request, res: Response)=>{
    let results: BusTicket[] | [] = [];
    const {
        from,
        to,
        dateStart,
        dateEnd,
        passengers
    } = req.body;
    if (from && to && dateStart && dateEnd && passengers){
        const query = "SELECT * FROM bus_trips WHERE leaving=? AND depart=? AND date BETWEEN ? AND ? AND ?<=available";
        connection.query(query,[from,to,dateStart, dateEnd,passengers])
            .on('result',(result: BusTicket)=>{
                results = [...results, result];
            })
            .on('end',()=>{
                res.json({                  
                    msg: "ok",
                    results
                });
            })
            .on('error',(err: QueryError)=> {
                if (err)
                    console.log(err.message)
            })
    } else
        res.json({msg: "Please enter all required data"});
 })

 router.post('/search',(req: Request,res: Response)=>{
    const { placeQuery, isLeaving } = req.body;
    let places: (string|undefined)[] = [];
    if (placeQuery) {
        const query = `SELECT DISTINCT ${isLeaving ? 'leaving' : 'depart'} FROM bus_trips WHERE ${isLeaving ? 'leaving' : 'depart'} LIKE ?`;
        connection.query(query,[placeQuery.concat('%')])
            .on('result',(result: Place)=>{
                if (isLeaving)
                    places = [...places, result.leaving];
                else
                    places = [...places, result.depart];
            })
            .on('end',()=>res.json({msg:'ok', places}))
            .on('error',(err: QueryError)=> {
                if (err)
                    console.log(err.message)
            })
    }
    else
        res.json({msg: "Please enter all required data"});
 })

 export default router;