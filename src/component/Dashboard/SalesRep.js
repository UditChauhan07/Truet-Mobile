import React from 'react'
import styles from '../Dashboard/style.module.css'

const SalesRep = () => {
  return (
    <div className={styles.tableMain}>
            <div className={styles.tableTittle}>
              <h2>Top Chart Sales Reps</h2>
              <div>
                <img src="/More-icon.svg" />

              </div>
            </div>

            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.Headingtable}>
                    <th>Name</th>
                    <th>Sale Target</th>
                    <th> Sale Amount</th>
                    <th>Diff.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className={styles.ProductDiv}>
                        <img src="svg/green-drop.svg" alt="" />
                        <span>Jasmine Kim</span>
                      </div>
                    </td>

                    <td>$93.45K</td>
                    <td>$266.31K</td>
                    <td>$172.86K</td>
                  </tr>
                  <tr>
                    <td>
                      <div className={styles.ProductDiv}>
                        <img src="svg/green-drop.svg" alt="" />
                        <span>Allison Kauffman</span>
                      </div>
                    </td>
                    <td>$6.93K</td>
                    <td>$146.61K</td>
                    <td>$139.68K</td>
                  </tr>
                  <tr>
                    <td>
                      <div className={styles.ProductDiv}>
                        <img src="svg/red-drop.svg" alt="" />
                        <span>Paula Carmer</span>
                      </div>
                    </td>

                    <td>$0.00K</td>
                    <td>$95.34K</td>
                    <td>$95.34K</td>
                  </tr>

                  <tr>
                    <td>
                    <div className={styles.ProductDiv}>
                        <img src="svg/green-drop.svg" alt="" />
                        <span>Kim Logan</span>
                      </div>
                    </td>
                    <td>$34.79K</td>
                    <td>$135.68K</td>
                    <td>$100.90K</td>
                  </tr>

                  <tr>
                    <td>
                    <div className={styles.ProductDiv}>
                        <img src="svg/green-drop.svg" alt="" />
                        <span>Kate Block</span>
                      </div>
                    </td>
                    <td>$93.43k</td>
                    <td>$266.31k</td>
                    <td>$172.86k</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  )
}

export default SalesRep
