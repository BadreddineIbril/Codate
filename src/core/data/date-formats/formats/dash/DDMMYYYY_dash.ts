import type { FunctionDefinition } from "@/core/types/date-format";

/**
 *
 * DD-MM-YYYY Code Base
 */
export const DDMMYYYY_dash: FunctionDefinition[] = [
  {
    language_id: "js",
    function: `
  function getDateFormat() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return \`\${day}-\${month}-\${year}\`;
  }
  
  // Result: "01-05-2024"
  `,
  },
  {
    language_id: "py",
    function: `
  import datetime
  
  def get_date_format():
      date = datetime.datetime.now()
      return date.strftime("%d-%m-%Y")
  
  # Result: "01-05-2024"
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
          DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
          String formattedDate = date.format(formatter);
          System.out.println(formattedDate);
      }
  }
  
  // Result: "01-05-2024"
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
          string formattedDate = date.ToString("dd-MM-yyyy");
          Console.WriteLine(formattedDate);
      }
  }
  
  // Result: "01-05-2024"
  `,
  },
  {
    language_id: "rb",
    function: `
  def get_date_format
    date = Time.now
    date.strftime("%d-%m-%Y")
  end
  
  # Result: "01-05-2024"
  `,
  },
  {
    language_id: "php",
    function: `
  <?php
  function getDateFormat() {
    return date("d-m-Y");
  }
  
  // Result: "01-05-2024"
  `,
  },
  {
    language_id: "swift",
    function: `
  import Foundation
  
  func getDateFormat() -> String {
      let date = Date()
      let formatter = DateFormatter()
      formatter.dateFormat = "dd-MM-yyyy"
      return formatter.string(from: date)
  }
  
  // Result: "01-05-2024"
  `,
  },
  {
    language_id: "kt",
    function: `
  import java.time.LocalDate
  import java.time.format.DateTimeFormatter
  
  fun getDateFormat(): String {
      val date = LocalDate.now()
      val formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy")
      return date.format(formatter)
  }
  
  // Result: "01-05-2024"
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
      return date.Format("02-01-2006")
  }
  
  func main() {
      fmt.Println(getDateFormat())
  }
  
  // Result: "01-05-2024"
  `,
  },
  {
    language_id: "rs",
    function: `
  use chrono::prelude::*;
  
  fn get_date_format() -> String {
      let date = Local::now();
      date.format("%d-%m-%Y").to_string()
  }
  
  fn main() {
      println!("{}", get_date_format());
  }
  
  // Result: "01-05-2024"
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
    var formatter = DateFormat('dd-MM-yyyy');
    var formattedDate = formatter.format(date);
    print(formattedDate);
  }

  // Result: "21-07-2024"
  `,
  },
];
