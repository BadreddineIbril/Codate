import type { FunctionDefinition } from "@/core/types/date-format";

/**
 *
 * YY-MM-DD Code Base
 */
export const YYMMDD_dash: FunctionDefinition[] = [
  {
    language_id: "js",
    function: `
  function getDateFormat() {
    const date = new Date();
    const year = String(date.getFullYear()).substring(2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return \`\${year}-\${month}-\${day}\`;
  }
  
  // Result: "24-05-01"
  `,
  },
  {
    language_id: "py",
    function: `
  import datetime
  
  def get_date_format():
      date = datetime.datetime.now()
      return date.strftime("%y-%m-%d")
  
  # Result: "24-05-01"
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
          DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yy-MM-dd");
          String formattedDate = date.format(formatter);
          System.out.println(formattedDate);
      }
  }
  
  // Result: "24-05-01"
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
          string formattedDate = date.ToString("yy-MM-dd");
          Console.WriteLine(formattedDate);
      }
  }
  
  // Result: "24-05-01"
  `,
  },
  {
    language_id: "rb",
    function: `
  def get_date_format
    date = Time.now
    date.strftime("%y-%m-%d")
  end
  
  # Result: "24-05-01"
  `,
  },
  {
    language_id: "php",
    function: `
  <?php
  function getDateFormat() {
    return date("y-m-d");
  }
  
  // Result: "24-05-01"
  `,
  },
  {
    language_id: "swift",
    function: `
  import Foundation
  
  func getDateFormat() -> String {
      let date = Date()
      let formatter = DateFormatter()
      formatter.dateFormat = "yy-MM-dd"
      return formatter.string(from: date)
  }
  
  // Result: "24-05-01"
  `,
  },
  {
    language_id: "kt",
    function: `
  import java.time.LocalDate
  import java.time.format.DateTimeFormatter
  
  fun getDateFormat(): String {
      val date = LocalDate.now()
      val formatter = DateTimeFormatter.ofPattern("yy-MM-dd")
      return date.format(formatter)
  }
  
  // Result: "24-05-01"
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
      return date.Format("06-01-02")
  }
  
  func main() {
      fmt.Println(getDateFormat())
  }
  
  // Result: "24-05-01"
  `,
  },
  {
    language_id: "rs",
    function: `
  use chrono::prelude::*;
  
  fn get_date_format() -> String {
      let date = Local::now();
      date.format("%y-%m-%d").to_string()
  }
  
  fn main() {
      println!("{}", get_date_format());
  }
  
  // Result: "24-05-01"
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
    var formatter = DateFormat('yy-MM-dd');
    var formattedDate = formatter.format(date);
    print(formattedDate);
  }

  // Result: "24-07-21"
  `,
  },
];
