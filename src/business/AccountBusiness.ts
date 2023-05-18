import { AccountDatabase } from "../database/AccountDatabase";
import { Account } from "../models/Account";
import { AccountDB } from "../types";

export class AccountBusiness {
    
    public getAccounts = async ():Promise<Account[]> => {

        const accountDatabase = new AccountDatabase()
            const accountsDB: AccountDB[] = await accountDatabase.findAccounts()
    
            const accounts = accountsDB.map((accountDB) => new Account(
                accountDB.id,
                accountDB.balance,
                accountDB.owner_id,
                accountDB.created_at
            ))

            return accounts
    }
}