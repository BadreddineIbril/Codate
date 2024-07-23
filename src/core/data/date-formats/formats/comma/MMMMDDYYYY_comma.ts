import type { FunctionDefinition } from "@/core/types/date-format";

/**
 *
 * MMMM DD, YYYY Code Base
 */
export const MMMMDDYYYY_comma: FunctionDefinition[] = [
  {
    language_id: "js",
    function: `
  function getDateFormat() {
    const date = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  
  // Result: "May 01, 2024"
  `,
  },
  {
    language_id: "py",
    function: `
  import datetime
  
  def get_date_format():
      date = datetime.datetime.now()
      return date.strftime("%B %d, %Y")
  
  # Result: "May 01, 2024"
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
          DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMMM dd, yyyy");
          String formattedDate = date.format(formatter);
          System.out.println(formattedDate);
      }
  }
  
  // Result: "May 01, 2024"
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
          string formattedDate = date.ToString("MMMM dd, yyyy");
          Console.WriteLine(formattedDate);
      }
  }
  
  // Result: "May 01, 2024"
  `,
  },
  {
    language_id: "rb",
    function: `
  def get_date_format
    date = Time.now
    date.strftime("%B %d, %Y")
  end
  
  # Result: "May 01, 2024"
  `,
  },
  {
    language_id: "php",
    function: `
  <?php
  function getDateFormat() {
    return date("F d, Y");
  }
  
  // Result: "May 01, 2024"
  `,
  },
  {
    language_id: "swift",
    function: `
  import Foundation
  
  func getDateFormat() -> String {
      let date = Date()
      let formatter = DateFormatter()
      formatter.dateFormat = "MMMM dd, yyyy"
      return formatter.string(from: date)
  }
  
  // Result: "May 01, 2024"
  `,
  },
  {
    language_id: "kt",
    function: `
  import java.time.LocalDate
  import java.time.format.DateTimeFormatter
  
  fun getDateFormat(): String {
      val date = LocalDate.now()
      val formatter = DateTimeFormatter.ofPattern("MMMM dd, yyyy")
      return date.format(formatter)
  }
  
  // Result: "May 01, 2024"
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
      return date.Format("January 02, 2006")
  }
  
  func main() {
      fmt.Println(getDateFormat())
  }
  
  // Result: "May 01, 2024"
  `,
  },
  {
    language_id: "rs",
    function: `
  use chrono::prelude::*;
  
  fn get_date_format() -> String {
      let date = Local::now();
      date.format("%B %d, %Y").to_string()
  }
  
  fn main() {
      println!("{}", get_date_format());
  }
  
  // Result: "May 01, 2024"
  `,
  },
  {
    language_id: "sh",
    function: `
    #!/bin/bash
    getDateFormat() {
      local date=$(date +"%B %d, %Y")
      echo "$date"
    }
    
    # Result: "May 01, 2024"
  `,
  },
];
