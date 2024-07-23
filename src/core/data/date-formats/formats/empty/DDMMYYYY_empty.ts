import type { FunctionDefinition } from "@/core/types/date-format";

/**
 *
 * DD MM YYYY Code Base
 */
export const DDMMYYYY_empty: FunctionDefinition[] = [
  {
    language_id: "js",
    function: `
  function getDateFormat() {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return \`\${day} \${month} \${year}\`;
  }
  
  // Result: "01 May 2024"
  `,
  },
  {
    language_id: "py",
    function: `
  import datetime
  
  def get_date_format():
      months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      date = datetime.datetime.now()
      month = months[date.month - 1]
      return f"{date.day} {month} {date.year}"
  
  # Result: "01 May 2024"
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
          DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd MMM yyyy");
          String formattedDate = date.format(formatter);
          System.out.println(formattedDate);
      }
  }
  
  // Result: "01 May 2024"
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
          string formattedDate = date.ToString("dd MMM yyyy");
          Console.WriteLine(formattedDate);
      }
  }
  
  // Result: "01 May 2024"
  `,
  },
  {
    language_id: "rb",
    function: `
  def get_date_format
    date = Time.now
    date.strftime("%d %b %Y")
  end
  
  # Result: "01 May 2024"
  `,
  },
  {
    language_id: "php",
    function: `
  <?php
  function getDateFormat() {
    return date("d M Y");
  }
  
  // Result: "01 May 2024"
  `,
  },
  {
    language_id: "swift",
    function: `
  import Foundation
  
  func getDateFormat() -> String {
      let date = Date()
      let formatter = DateFormatter()
      formatter.dateFormat = "dd MMM yyyy"
      return formatter.string(from: date)
  }
  
  // Result: "01 May 2024"
  `,
  },
  {
    language_id: "kt",
    function: `
  import java.time.LocalDate
  import java.time.format.DateTimeFormatter
  
  fun getDateFormat(): String {
      val date = LocalDate.now()
      val formatter = DateTimeFormatter.ofPattern("dd MMM yyyy")
      return date.format(formatter)
  }
  
  // Result: "01 May 2024"
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
      return date.Format("02 Jan 2006")
  }
  
  func main() {
      fmt.Println(getDateFormat())
  }
  
  // Result: "01 May 2024"
  `,
  },
  {
    language_id: "rs",
    function: `
  use chrono::prelude::*;
  
  fn get_date_format() -> String {
      let date = Local::now();
      date.format("%d %b %Y").to_string()
  }
  
  fn main() {
      println!("{}", get_date_format());
  }
  
  // Result: "01 May 2024"
  `,
  },
  {
    language_id: "dart",
    function: `
  // add intl package to dependencies:
  // $ dart pub add intl
  import 'package:intl/intl.dart';

  String getDateFormat() {
    var date = DateTime.now();
    var formatter = DateFormat('dd MMMM yyyy');
    return formatter.format(date);
  }

  void main() { 
    print(getDateFormat());
  }

  // Result: "01 May 2024"
  `,
  },
];
