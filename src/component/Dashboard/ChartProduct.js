import React from 'react'
import styles from '../Dashboard/style.module.css'

const ChartProduct = () => {
  return (
    <div className={` ${styles.tableMain} ${styles.tableMain1}`}>
    <div className={styles.tableTittle}>
      <h2>Top Chart Product</h2>
      <div>
        <img src="/More-icon.svg" />
      </div>
    </div>

    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.Headingtable}>
            <th>Product Name</th>
            <th>Sale Target</th>
            <th>Sale Amount</th>
            <th>Diff.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.ProductDiv}>
                <img src="svg/green-drop.svg" alt="" />
                <span>Polimer Bitumen</span>
              </div>

            </td>
            <td>$196.57K</td>
            <td>$316.90K</td>
            <td>$120.33K</td>
          </tr>
          <tr>
            <td>
              <div className={styles.ProductDiv}>
                <img src="svg/red-drop.svg" alt="" />
                <span>Liquid waterproofing</span>
              </div>
            </td>
            <td>$0.00K</td>
            <td>$170.00K</td>
            <td>$170.00K</td>
          </tr>
          <tr>
            <td>
              <div className={styles.ProductDiv}>
                <img src="svg/green-drop.svg" alt="" />
                <span>Acustic insulation</span>
              </div>
            </td>
            <td>$267.45K</td>
            <td>$367.45K</td>
            <td>$100.00K</td>
          </tr>
          <tr>
            <td>
              <div className={styles.ProductDiv}>
                <img src="svg/green-drop.svg" alt="" />
                <span>Synthetic membranes</span>
              </div>
            </td>
            <td>$93.45K</td>
            <td>$293.45K</td>
            <td>$200.00K</td>
          </tr>
          <tr>
            <td>
              <div className={styles.ProductDiv}>
                <img src="svg/red-drop.svg" alt="" />
                <span>Thermal insulation</span>
              </div>
            </td>
            <td>$00.00K</td>
            <td>$436.59K</td>
            <td>$436.59K</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default ChartProduct
