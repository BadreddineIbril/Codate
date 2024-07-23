import type { FunctionDefinition } from "@/core/types/date-format";

/**
 *
 * MMM YYYY Code Base
 */
export const MMMYYYY_empty: FunctionDefinition[] = [
  {
    language_id: "js",
    function: `
  function getDateFormat() {
    const date = new Date();
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
    const year = date.getFullYear();
    return \`\${month} \${year}\`;
  }
  
  // Result: "May 2024"
  `,
  },
  {
    language_id: "py",
    function: `
  import datetime
  
  def get_date_format():
      date = datetime.datetime.now()
      return date.strftime("%b %Y")
  
  # Result: "May 2024"
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
          DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMM yyyy");
          String formattedDate = date.format(formatter);
          System.out.println(formattedDate);
      }
  }
  
  // Result: "May 2024"
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
          string formattedDate = date.ToString("MMM yyyy");
          Console.WriteLine(formattedDate);
      }
  }
  
  // Result: "May 2024"
  `,
  },
  {
    language_id: "rb",
    function: `
  def get_date_format
    date = Time.now
    date.strftime("%b %Y")
  end
  
  # Result: "May 2024"
  `,
  },
  {
    language_id: "php",
    function: `
  <?php
  function getDateFormat() {
    return date("M Y");
  }
  
  // Result: "May 2024"
  `,
  },
  {
    language_id: "swift",
    function: `
  import Foundation
  
  func getDateFormat() -> String {
      let date = Date()
      let formatter = DateFormatter()
      formatter.dateFormat = "MMM yyyy"
      return formatter.string(from: date)
  }
  
  // Result: "May 2024"
  `,
  },
  {
    language_id: "kt",
    function: `
  import java.time.LocalDate
  import java.time.format.DateTimeFormatter
  
  fun getDateFormat(): String {
      val date = LocalDate.now()
      val formatter = DateTimeFormatter.ofPattern("MMM yyyy")
      return date.format(formatter)
  }
  
  // Result: "May 2024"
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
      return date.Format("Jan 2006")
  }
  
  func main() {
      fmt.Println(getDateFormat())
  }
  
  // Result: "May 2024"
  `,
  },
  {
    language_id: "rs",
    function: `
  use chrono::prelude::*;
  
  fn get_date_format() -> String {
      let date = Local::now();
      date.format("%b %Y").to_string()
  }
  
  fn main() {
      println!("{}", get_date_format());
  }
  
  // Result: "May 2024"
  `,
  },
  {
    language_id: "sh",
    function: `
    #!/bin/bash
    getDateFormat() {
      local date=$(date +"%b %Y")
      echo "$date"
    }
    
    # Result: "May 2024"
  `,
  },
];
