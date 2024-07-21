import type { FunctionDefinition } from "@/core/types/date-format";

/**
 *
 * YYYY/MM/DD Code Base
 */
export const YYYYMMDD_slash: FunctionDefinition[] = [
  {
    language_id: "js",
    function: `
  function getDateFormat() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return \`\${year}/\${month}/\${day}\`;
  }
  
  // Result: "2024/05/01"
  `,
  },
  {
    language_id: "py",
    function: `
  import datetime
  
  def get_date_format():
      date = datetime.datetime.now()
      return date.strftime("%Y/%m/%d")
  
  # Result: "2024/05/01"
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
          DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
          String formattedDate = date.format(formatter);
          System.out.println(formattedDate);
      }
  }
  
  // Result: "2024/05/01"
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
          string formattedDate = date.ToString("yyyy/MM/dd");
          Console.WriteLine(formattedDate);
      }
  }
  
  // Result: "2024/05/01"
  `,
  },
  {
    language_id: "rb",
    function: `
  def get_date_format
    date = Time.now
    date.strftime("%Y/%m/%d")
  end
  
  # Result: "2024/05/01"
  `,
  },
  {
    language_id: "php",
    function: `
  <?php
  function getDateFormat() {
    return date("Y/m/d");
  }
  
  // Result: "2024/05/01"
  `,
  },
  {
    language_id: "swift",
    function: `
  import Foundation
  
  func getDateFormat() -> String {
      let date = Date()
      let formatter = DateFormatter()
      formatter.dateFormat = "yyyy/MM/dd"
      return formatter.string(from: date)
  }
  
  // Result: "2024/05/01"
  `,
  },
  {
    language_id: "kt",
    function: `
  import java.time.LocalDate
  import java.time.format.DateTimeFormatter
  
  fun getDateFormat(): String {
      val date = LocalDate.now()
      val formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd")
      return date.format(formatter)
  }
  
  // Result: "2024/05/01"
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
      return date.Format("2006/01/02")
  }
  
  func main() {
      fmt.Println(getDateFormat())
  }
  
  // Result: "2024/05/01"
  `,
  },
  {
    language_id: "rs",
    function: `
  use chrono::prelude::*;
  
  fn get_date_format() -> String {
      let date = Local::now();
      date.format("%Y/%m/%d").to_string()
  }
  
  fn main() {
      println!("{}", get_date_format());
  }
  
  // Result: "2024/05/01"
  `,
  },
  {
    language_id: "dart",
    function: `
  // add intl package to dependencies:
  // $ dart pub add intl
  import 'package:intl/intl.dart';

  void main() {
    var date = DateTime.now();
    var formatter = DateFormat('yyyy/MM/dd');
    var formattedDate = formatter.format(date);
    print(formattedDate);
  }

  // Result: "2024/07/21"
  `,
  },
];
