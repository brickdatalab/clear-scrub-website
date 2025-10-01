export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      accounts: {
        Row: {
          account_number_masked: string | null
          account_type: string | null
          bank_name: string
          company_id: string
          created_at: string | null
          id: string
          is_primary: boolean | null
          notes: string | null
          routing_number_masked: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          account_number_masked?: string | null
          account_type?: string | null
          bank_name: string
          company_id: string
          created_at?: string | null
          id?: string
          is_primary?: boolean | null
          notes?: string | null
          routing_number_masked?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          account_number_masked?: string | null
          account_type?: string | null
          bank_name?: string
          company_id?: string
          created_at?: string | null
          id?: string
          is_primary?: boolean | null
          notes?: string | null
          routing_number_masked?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "accounts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      api_keys: {
        Row: {
          created_at: string | null
          expires_at: string | null
          id: string
          is_active: boolean | null
          key_hash: string
          key_name: string
          last_used_at: string | null
          prefix: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          key_hash: string
          key_name: string
          last_used_at?: string | null
          prefix: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          key_hash?: string
          key_name?: string
          last_used_at?: string | null
          prefix?: string
          user_id?: string
        }
        Relationships: []
      }
      companies: {
        Row: {
          address_line1: string | null
          address_line2: string | null
          business_type: string | null
          city: string | null
          company_id: string | null
          country: string | null
          created_at: string | null
          crm_sync_status: string | null
          ein: string | null
          email: string | null
          id: string
          industry: string | null
          is_starred: boolean | null
          last_activity_at: string | null
          name: string
          notes: string | null
          phone: string | null
          policy_result: string | null
          received_at: string | null
          risk_level: string | null
          risk_score: number | null
          state: string | null
          tags: string[] | null
          underwriting_status: string | null
          updated_at: string | null
          user_id: string
          website: string | null
          zip_code: string | null
        }
        Insert: {
          address_line1?: string | null
          address_line2?: string | null
          business_type?: string | null
          city?: string | null
          company_id?: string | null
          country?: string | null
          created_at?: string | null
          crm_sync_status?: string | null
          ein?: string | null
          email?: string | null
          id?: string
          industry?: string | null
          is_starred?: boolean | null
          last_activity_at?: string | null
          name: string
          notes?: string | null
          phone?: string | null
          policy_result?: string | null
          received_at?: string | null
          risk_level?: string | null
          risk_score?: number | null
          state?: string | null
          tags?: string[] | null
          underwriting_status?: string | null
          updated_at?: string | null
          user_id: string
          website?: string | null
          zip_code?: string | null
        }
        Update: {
          address_line1?: string | null
          address_line2?: string | null
          business_type?: string | null
          city?: string | null
          company_id?: string | null
          country?: string | null
          created_at?: string | null
          crm_sync_status?: string | null
          ein?: string | null
          email?: string | null
          id?: string
          industry?: string | null
          is_starred?: boolean | null
          last_activity_at?: string | null
          name?: string
          notes?: string | null
          phone?: string | null
          policy_result?: string | null
          received_at?: string | null
          risk_level?: string | null
          risk_score?: number | null
          state?: string | null
          tags?: string[] | null
          underwriting_status?: string | null
          updated_at?: string | null
          user_id?: string
          website?: string | null
          zip_code?: string | null
        }
        Relationships: []
      }
      documents: {
        Row: {
          api_key_id: string | null
          company_id: string | null
          created_at: string | null
          error_message: string | null
          file_path: string
          file_size_bytes: number | null
          filename: string
          id: string
          mime_type: string | null
          processing_completed_at: string | null
          processing_duration_seconds: number | null
          processing_started_at: string | null
          source: string | null
          status: string | null
          submission_method: string | null
          submitted_by_user_id: string | null
          updated_at: string | null
          uploaded_by: string | null
        }
        Insert: {
          api_key_id?: string | null
          company_id?: string | null
          created_at?: string | null
          error_message?: string | null
          file_path: string
          file_size_bytes?: number | null
          filename: string
          id?: string
          mime_type?: string | null
          processing_completed_at?: string | null
          processing_duration_seconds?: number | null
          processing_started_at?: string | null
          source?: string | null
          status?: string | null
          submission_method?: string | null
          submitted_by_user_id?: string | null
          updated_at?: string | null
          uploaded_by?: string | null
        }
        Update: {
          api_key_id?: string | null
          company_id?: string | null
          created_at?: string | null
          error_message?: string | null
          file_path?: string
          file_size_bytes?: number | null
          filename?: string
          id?: string
          mime_type?: string | null
          processing_completed_at?: string | null
          processing_duration_seconds?: number | null
          processing_started_at?: string | null
          source?: string | null
          status?: string | null
          submission_method?: string | null
          submitted_by_user_id?: string | null
          updated_at?: string | null
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "documents_api_key_id_fkey"
            columns: ["api_key_id"]
            isOneToOne: false
            referencedRelation: "api_keys"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documents_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documents_submitted_by_user_id_fkey"
            columns: ["submitted_by_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      email_submissions: {
        Row: {
          attachment_count: number | null
          body_text: string | null
          created_at: string | null
          id: string
          message_id: string
          processed: boolean | null
          received_at: string | null
          sender_email: string
          subject: string | null
        }
        Insert: {
          attachment_count?: number | null
          body_text?: string | null
          created_at?: string | null
          id?: string
          message_id: string
          processed?: boolean | null
          received_at?: string | null
          sender_email: string
          subject?: string | null
        }
        Update: {
          attachment_count?: number | null
          body_text?: string | null
          created_at?: string | null
          id?: string
          message_id?: string
          processed?: boolean | null
          received_at?: string | null
          sender_email?: string
          subject?: string | null
        }
        Relationships: []
      }
      monthly_summaries: {
        Row: {
          account_id: string
          average_daily_balance: number | null
          company_id: string
          created_at: string | null
          deposit_frequency_score: number | null
          ending_balance: number | null
          id: string
          largest_deposit: number | null
          largest_withdrawal: number | null
          month_end: string
          month_start: string
          negative_balance_days: number | null
          nsf_count: number | null
          nsf_total_amount: number | null
          total_deposits: number | null
          total_withdrawals: number | null
          transaction_count: number | null
          true_revenue: number | null
          true_revenue_count: number | null
          updated_at: string | null
          withdrawal_consistency_score: number | null
        }
        Insert: {
          account_id: string
          average_daily_balance?: number | null
          company_id: string
          created_at?: string | null
          deposit_frequency_score?: number | null
          ending_balance?: number | null
          id?: string
          largest_deposit?: number | null
          largest_withdrawal?: number | null
          month_end: string
          month_start: string
          negative_balance_days?: number | null
          nsf_count?: number | null
          nsf_total_amount?: number | null
          total_deposits?: number | null
          total_withdrawals?: number | null
          transaction_count?: number | null
          true_revenue?: number | null
          true_revenue_count?: number | null
          updated_at?: string | null
          withdrawal_consistency_score?: number | null
        }
        Update: {
          account_id?: string
          average_daily_balance?: number | null
          company_id?: string
          created_at?: string | null
          deposit_frequency_score?: number | null
          ending_balance?: number | null
          id?: string
          largest_deposit?: number | null
          largest_withdrawal?: number | null
          month_end?: string
          month_start?: string
          negative_balance_days?: number | null
          nsf_count?: number | null
          nsf_total_amount?: number | null
          total_deposits?: number | null
          total_withdrawals?: number | null
          transaction_count?: number | null
          true_revenue?: number | null
          true_revenue_count?: number | null
          updated_at?: string | null
          withdrawal_consistency_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "monthly_summaries_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "monthly_summaries_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          company_role: string | null
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          company_role?: string | null
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          company_role?: string | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      statements: {
        Row: {
          account_id: string
          anomaly_score: number | null
          average_daily_balance: number | null
          closing_balance: number | null
          company_id: string | null
          created_at: string | null
          data_quality_score: number | null
          document_id: string
          id: string
          largest_deposit: number | null
          largest_withdrawal: number | null
          negative_balance_days: number | null
          non_revenue_count: number | null
          nsf_count: number | null
          nsf_total_amount: number | null
          opening_balance: number | null
          raw_transactions: Json | null
          reconciliation_difference: number | null
          statement_date: string | null
          statement_period_end: string
          statement_period_start: string
          total_deposits: number | null
          total_non_revenue: number | null
          total_withdrawals: number | null
          transaction_count: number | null
          true_revenue: number | null
          true_revenue_count: number | null
          updated_at: string | null
        }
        Insert: {
          account_id: string
          anomaly_score?: number | null
          average_daily_balance?: number | null
          closing_balance?: number | null
          company_id?: string | null
          created_at?: string | null
          data_quality_score?: number | null
          document_id: string
          id?: string
          largest_deposit?: number | null
          largest_withdrawal?: number | null
          negative_balance_days?: number | null
          non_revenue_count?: number | null
          nsf_count?: number | null
          nsf_total_amount?: number | null
          opening_balance?: number | null
          raw_transactions?: Json | null
          reconciliation_difference?: number | null
          statement_date?: string | null
          statement_period_end: string
          statement_period_start: string
          total_deposits?: number | null
          total_non_revenue?: number | null
          total_withdrawals?: number | null
          transaction_count?: number | null
          true_revenue?: number | null
          true_revenue_count?: number | null
          updated_at?: string | null
        }
        Update: {
          account_id?: string
          anomaly_score?: number | null
          average_daily_balance?: number | null
          closing_balance?: number | null
          company_id?: string | null
          created_at?: string | null
          data_quality_score?: number | null
          document_id?: string
          id?: string
          largest_deposit?: number | null
          largest_withdrawal?: number | null
          negative_balance_days?: number | null
          non_revenue_count?: number | null
          nsf_count?: number | null
          nsf_total_amount?: number | null
          opening_balance?: number | null
          raw_transactions?: Json | null
          reconciliation_difference?: number | null
          statement_date?: string | null
          statement_period_end?: string
          statement_period_start?: string
          total_deposits?: number | null
          total_non_revenue?: number | null
          total_withdrawals?: number | null
          transaction_count?: number | null
          true_revenue?: number | null
          true_revenue_count?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "statements_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "statements_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "statements_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          account_id: string
          amount: number
          balance: number | null
          category: string | null
          check_number: string | null
          company_id: string
          created_at: string | null
          description: string
          id: string
          is_flagged: boolean | null
          is_nsf: boolean | null
          is_transfer: boolean | null
          merchant_name: string | null
          needs_review: boolean | null
          notes: string | null
          post_date: string | null
          raw_description: string | null
          reference_number: string | null
          statement_id: string
          transaction_date: string
          transaction_type: string | null
          updated_at: string | null
        }
        Insert: {
          account_id: string
          amount: number
          balance?: number | null
          category?: string | null
          check_number?: string | null
          company_id: string
          created_at?: string | null
          description: string
          id?: string
          is_flagged?: boolean | null
          is_nsf?: boolean | null
          is_transfer?: boolean | null
          merchant_name?: string | null
          needs_review?: boolean | null
          notes?: string | null
          post_date?: string | null
          raw_description?: string | null
          reference_number?: string | null
          statement_id: string
          transaction_date: string
          transaction_type?: string | null
          updated_at?: string | null
        }
        Update: {
          account_id?: string
          amount?: number
          balance?: number | null
          category?: string | null
          check_number?: string | null
          company_id?: string
          created_at?: string | null
          description?: string
          id?: string
          is_flagged?: boolean | null
          is_nsf?: boolean | null
          is_transfer?: boolean | null
          merchant_name?: string | null
          needs_review?: boolean | null
          notes?: string | null
          post_date?: string | null
          raw_description?: string | null
          reference_number?: string | null
          statement_id?: string
          transaction_date?: string
          transaction_type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_statement_id_fkey"
            columns: ["statement_id"]
            isOneToOne: false
            referencedRelation: "statements"
            referencedColumns: ["id"]
          },
        ]
      }
      usage_logs: {
        Row: {
          action: string
          cost: number
          created_at: string | null
          document_id: string | null
          id: string
          metadata: Json | null
          user_id: string
        }
        Insert: {
          action: string
          cost?: number
          created_at?: string | null
          document_id?: string | null
          id?: string
          metadata?: Json | null
          user_id: string
        }
        Update: {
          action?: string
          cost?: number
          created_at?: string | null
          document_id?: string | null
          id?: string
          metadata?: Json | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
