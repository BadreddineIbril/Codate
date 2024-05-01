import type { FunctionDefinition } from "@/core/types/date-format";

/**
 *
 * MM/DD/YY Code Base
 */
export const MMDDYY_slash: FunctionDefinition[] = [
  {
    language_id: "javascript",
    function: `
  function getDateFormat() {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = String(date.getFullYear()).substring(2);
    return \`\${month}/\${day}/\${year}\`;
  }
  
  // Result: "05/01/24"
  `,
  },
  {
    language_id: "python",
    function: `
  import datetime
  
  def get_date_format():
      date = datetime.datetime.now()
      return date.strftime("%m/%d/%y")
  
  # Result: "05/01/24"
  `,
  },
  {
    language_id: "java",
    function: `
  import java.time.LocalDate;
  import java.time.format.DateTimeFormatter;
  
  public class Main {
      public static void main(String[] args) {
          LocalDate date = LocalDate.now();
          DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yy");
          String formattedDate = date.format(formatter);
          System.out.println(formattedDate);
      }
  }
  
  // Result: "05/01/24"
  `,
  },
  {
    language_id: "csharp",
    function: `
  using System;
  
  class Program
  {
      static void Main()
      {
          DateTime date = DateTime.Now;
          string formattedDate = date.ToString("MM/dd/yy");
          Console.WriteLine(formattedDate);
      }
  }
  
  // Result: "05/01/24"
  `,
  },
  {
    language_id: "ruby",
    function: `
  def get_date_format
    date = Time.now
    date.strftime("%m/%d/%y")
  end
  
  # Result: "05/01/24"
  `,
  },
  {
    language_id: "php",
    function: `
  <?php
  function getDateFormat() {
    return date("m/d/y");
  }
  
  // Result: "05/01/24"
  `,
  },
  {
    language_id: "swift",
    function: `
  import Foundation
  
  func getDateFormat() -> String {
      let date = Date()
      let formatter = DateFormatter()
      formatter.dateFormat = "MM/dd/yy"
      return formatter.string(from: date)
  }
  
  // Result: "05/01/24"
  `,
  },
  {
    language_id: "kotlin",
    function: `
  import java.time.LocalDate
  import java.time.format.DateTimeFormatter
  
  fun getDateFormat(): String {
      val date = LocalDate.now()
      val formatter = DateTimeFormatter.ofPattern("MM/dd/yy")
      return date.format(formatter)
  }
  
  // Result: "05/01/24"
  `,
  },
  {
    language_id: "go",
    function: `
  package main
  
  import (
      "fmt"
      "time"
  )
  
  func getDateFormat() string {
      date := time.Now()
      return date.Format("01/02/06")
  }
  
  func main() {
      fmt.Println(getDateFormat())
  }
  
  // Result: "05/01/24"
  `,
  },
  {
    language_id: "rust",
    function: `
  use chrono::prelude::*;
  
  fn get_date_format() -> String {
      let date = Local::now();
      date.format("%m/%d/%y").to_string()
  }
  
  fn main() {
      println!("{}", get_date_format());
  }
  
  // Result: "05/01/24"
  `,
  },
];
