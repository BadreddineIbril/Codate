import type { FunctionDefinition } from "@/core/types/date-format";

/**
 *
 * MM/DD/YYYY HH:mm Code Base
 */
export const MMDDYYYY_HHmm: FunctionDefinition[] = [
  {
    language_id: "js",
    function: `
  function getDateFormat() {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return \`\${month}/\${day}/\${year} \${hours}:\${minutes}\`;
  }
  
  // Result: "05/01/2024 00:00"
  `,
  },
  {
    language_id: "py",
    function: `
  import datetime
  
  def get_date_format():
      date = datetime.datetime.now()
      return date.strftime("%m/%d/%Y %H:%M")
  
  # Result: "05/01/2024 00:00"
  `,
  },
  {
    language_id: "java",
    function: `
  import java.time.LocalDateTime;
  import java.time.format.DateTimeFormatter;
  
  public class Main {
      public static void main(String[] args) {
          LocalDateTime date = LocalDateTime.now();
          DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy HH:mm");
          String formattedDate = date.format(formatter);
          System.out.println(formattedDate);
      }
  }
  
  // Result: "05/01/2024 00:00"
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
          string formattedDate = date.ToString("MM/dd/yyyy HH:mm");
          Console.WriteLine(formattedDate);
      }
  }
  
  // Result: "05/01/2024 00:00"
  `,
  },
  {
    language_id: "rb",
    function: `
  def get_date_format
    date = Time.now
    date.strftime("%m/%d/%Y %H:%M")
  end
  
  # Result: "05/01/2024 00:00"
  `,
  },
  {
    language_id: "php",
    function: `
  <?php
  function getDateFormat() {
    return date("m/d/Y H:i");
  }
  
  // Result: "05/01/2024 00:00"
  `,
  },
  {
    language_id: "swift",
    function: `
  import Foundation
  
  func getDateFormat() -> String {
      let date = Date()
      let formatter = DateFormatter()
      formatter.dateFormat = "MM/dd/yyyy HH:mm"
      return formatter.string(from: date)
  }
  
  // Result: "05/01/2024 00:00"
  `,
  },
  {
    language_id: "kt",
    function: `
  import java.time.LocalDateTime
  import java.time.format.DateTimeFormatter
  
  fun getDateFormat(): String {
      val date = LocalDateTime.now()
      val formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy HH:mm")
      return date.format(formatter)
  }
  
  // Result: "05/01/2024 00:00"
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
      return date.Format("01/02/2006 15:04")
  }
  
  func main() {
      fmt.Println(getDateFormat())
  }
  
  // Result: "05/01/2024 00:00"
  `,
  },
  {
    language_id: "rs",
    function: `
  use chrono::prelude::*;
  
  fn get_date_format() -> String {
      let date = Local::now();
      date.format("%m/%d/%Y %H:%M").to_string()
  }
  
  fn main() {
      println!("{}", get_date_format());
  }
  
  // Result: "05/01/2024 00:00"
  `,
  },
  {
    language_id: "sh",
    function: `
    #!/bin/bash
    getDateFormat() {
      local date=$(date +"%m/%d/%Y %H:%M")
      echo "$date"
    }
    
    # Result: "05/01/2024 00:00"
  `,
  },
];
