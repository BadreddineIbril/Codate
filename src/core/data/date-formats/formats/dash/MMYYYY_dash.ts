import type { FunctionDefinition } from "@/core/types/date-format";

/**
 *
 * MM-YYYY Code Base
 */
export const MMYYYY_dash: FunctionDefinition[] = [
  {
    language_id: "js",
    function: `
  function getDateFormat() {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return \`\${month}-\${year}\`;
  }
  
  // Result: "05-2024"
  `,
  },
  {
    language_id: "py",
    function: `
  import datetime
  
  def get_date_format():
      date = datetime.datetime.now()
      return date.strftime("%m-%Y")
  
  # Result: "05-2024"
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
          DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM-yyyy");
          String formattedDate = date.format(formatter);
          System.out.println(formattedDate);
      }
  }
  
  // Result: "05-2024"
  `,
  },
  {
    language_id: "cs",
    function: `
  using System;
  
  class Program
  {
      static void Main()
      {
          DateTime date = DateTime.Now;
          string formattedDate = date.ToString("MM-yyyy");
          Console.WriteLine(formattedDate);
      }
  }
  
  // Result: "05-2024"
  `,
  },
  {
    language_id: "rb",
    function: `
  def get_date_format
    date = Time.now
    date.strftime("%m-%Y")
  end
  
  # Result: "05-2024"
  `,
  },
  {
    language_id: "php",
    function: `
  <?php
  function getDateFormat() {
    return date("m-Y");
  }
  
  // Result: "05-2024"
  `,
  },
  {
    language_id: "swift",
    function: `
  import Foundation
  
  func getDateFormat() -> String {
      let date = Date()
      let formatter = DateFormatter()
      formatter.dateFormat = "MM-yyyy"
      return formatter.string(from: date)
  }
  
  // Result: "05-2024"
  `,
  },
  {
    language_id: "kt",
    function: `
  import java.time.LocalDate
  import java.time.format.DateTimeFormatter
  
  fun getDateFormat(): String {
      val date = LocalDate.now()
      val formatter = DateTimeFormatter.ofPattern("MM-yyyy")
      return date.format(formatter)
  }
  
  // Result: "05-2024"
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
      return date.Format("01-2006")
  }
  
  func main() {
      fmt.Println(getDateFormat())
  }
  
  // Result: "05-2024"
  `,
  },
  {
    language_id: "rs",
    function: `
  use chrono::prelude::*;
  
  fn get_date_format() -> String {
      let date = Local::now();
      date.format("%m-%Y").to_string()
  }
  
  fn main() {
      println!("{}", get_date_format());
  }
  
  // Result: "05-2024"
  `,
  },
  {
    language_id: "sh",
    function: `
    #!/bin/bash
    getDateFormat() {
      local date=$(date +"%m-%Y")
      echo "$date"
    }
    
    # Result: "05-2024"
  `,
  },
];
